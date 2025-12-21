'use client';
import { useState, useRef, useEffect } from "react";
import { FaCamera } from "react-icons/fa";
import { useRouter } from "next/navigation";

let usernameTimer: NodeJS.Timeout;

const Page = () => {
  const router = useRouter();

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_3F24ubowcq4ap8Lo7rUNteDo1izkSb04AQ&s"
  );
  const [username, setUsername] = useState("");
  const [usernameValid, setUsernameValid] = useState<boolean | null>(null);
  const [usernameMsg, setUsernameMsg] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  /* ------------------ HELPERS ------------------ */
  function generateSuggestions(base: string) {
    const clean = base.toLowerCase().replace(/[^a-z0-9]/g, "");
    return [
      clean,
      `${clean}_`,
      `${clean}${Math.floor(Math.random() * 100)}`,
      `${clean}_${Math.floor(Math.random() * 1000)}`
    ];
  }

  function clearUsernameMessageIfValid() {
    if (usernameValid) setUsernameMsg(null);
  }


  /* ------------------ AUTO SUGGEST FROM DISPLAY NAME ------------------ */
  useEffect(() => {
    if (!username && displayName.length > 2) {
      setSuggestions(generateSuggestions(displayName));
    }
  }, [displayName]);

  /* ------------------ AVATAR ------------------ */
  function handleAvatarClick() {
    fileInputRef.current?.click();
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;

    setAvatarFile(file); // store for submission

    const reader = new FileReader();
    reader.onload = (ev) => {
      if (ev.target?.result) setAvatarPreview(ev.target.result as string);
    };
    reader.readAsDataURL(file);
  }

  /* ------------------ DATE HANDLERS ------------------ */
  const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 2) {
      const numValue = parseInt(value);
      if (value === "" || (numValue >= 1 && numValue <= 31)) {
        setDay(value);
        if (value.length === 2 || (value.length === 1 && numValue >= 4)) {
          monthRef.current?.focus();
        }
      }
    }
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 2) {
      const numValue = parseInt(value);
      if (value === "" || (numValue >= 1 && numValue <= 12)) {
        setMonth(value);
        if (value.length === 2 || (value.length === 1 && numValue >= 2)) {
          yearRef.current?.focus();
        }
      }
    }
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 4) setYear(value);
  };



  /* ------------------ SUBMIT ------------------ */
  

  /* ------------------ RENDER ------------------ */
  return (
    <div className="flex h-[100dvh] w-full flex-col bg-black text-white font-sans relative overflow-hidden">
      <div className="absolute top-6 left-6 sm:top-8 sm:left-8">
        <p className="text-5xl font-semibold Fls">Aetheris</p>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-4 sm:px-0 scale-90 sm:scale-100 ">
        <div className="w-full max-w-[400px] space-y-8">

          <div className="text-left space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-white text-center">
              Profile Setup
            </h1>
            <p className="text-sm text-gray-400 text-center">
              Complete your profile to get started with <span className="Astehtic">Aetheris.</span>
            </p>
          </div>

          <form
            className="mt-8 space-y-4"
          >
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <div className="space-y-4">
              <div>
                <div className="Avatar w-full flex justify-center items-center mb-3">
                  <input
                    ref={fileInputRef}
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <div className="User-pfp w-26 h-26 rounded-full border-6 border-black overflow-hidden relative">
                    <img
                      src={avatarPreview}
                      alt=""
                      className="w-26 h-26 object-cover rounded-full mb-5 cursor-pointer"
                      onClick={handleAvatarClick}
                    />
                    <div
                      className="absolute bottom-0 w-full bg-neutral-900/60 p-1 flex items-center justify-center cursor-pointer"
                      onClick={handleAvatarClick}
                    >
                      <FaCamera />
                    </div>
                  </div>
                </div>

                <input
                  id="username"
                  name="username"
                  type="text"
                  value={username}
                  required
                  className={`bg-neutral-900 px-4 py-4 border ${usernameValid === false ? "border-red-500" : "border-neutral-800"} rounded-xl w-full focus:outline-none focus:ring-1 focus:ring-white`}
                  placeholder="Username"
                />
              </div>

              {usernameMsg && (
                <p className={`text-sm ${usernameValid ? "text-green-400" : "text-red-400"}`}>
                  {usernameMsg}
                </p>
              )}

              {suggestions.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {suggestions.map(s => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => {
                        setUsername(s);
                        setUsernameValid(true);
                        setUsernameMsg("Username selected");
                        setSuggestions([]);
                      }}
                      className="px-3 py-1 text-xs rounded-full bg-neutral-800 hover:bg-neutral-700"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}

              <div className="relative">
                <input
                  id="display_name"
                  name="display_name"
                  type="text"
                  required
                  value={displayName}
                  onChange={e => setDisplayName(e.target.value)}
                  onFocus={clearUsernameMessageIfValid}
                  className="bg-neutral-900 px-4 py-4 border border-neutral-800 rounded-xl w-full focus:outline-none focus:ring-1 focus:ring-white"
                  placeholder="Display Name"
                />
              </div>

              <div className="relative">
                <div className="grid grid-cols-[1fr_1fr_1.5fr] gap-3">
                  <input
                    type="text"
                    inputMode="numeric"
                    value={day}
                    onChange={handleDayChange}
                    onFocus={clearUsernameMessageIfValid}
                    maxLength={2}
                    placeholder="DD"
                    className="bg-neutral-900 px-4 py-4 border border-neutral-800 rounded-xl w-full text-center focus:outline-none focus:ring-1 focus:ring-white"
                    required
                  />
                  <input
                    ref={monthRef}
                    type="text"
                    inputMode="numeric"
                    value={month}
                    onChange={handleMonthChange}
                    onFocus={clearUsernameMessageIfValid}
                    maxLength={2}
                    placeholder="MM"
                    className="bg-neutral-900 px-4 py-4 border border-neutral-800 rounded-xl w-full text-center focus:outline-none focus:ring-1 focus:ring-white"
                    required
                  />
                  <input
                    ref={yearRef}
                    type="text"
                    inputMode="numeric"
                    value={year}
                    onChange={handleYearChange}
                    onFocus={clearUsernameMessageIfValid}
                    maxLength={4}
                    placeholder="YYYY"
                    className="bg-neutral-900 px-4 py-4 border border-neutral-800 rounded-xl w-full text-center focus:outline-none focus:ring-1 focus:ring-white"
                    required
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || usernameValid === false}
              className="flex w-full justify-center rounded-xl bg-white px-4 py-4 text-sm font-bold text-black hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50"
            >
              {loading ? "Processing..." : "Continue"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;