'use client';
import { useState, useRef } from "react";
import { FaCamera } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const Page = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [avatar, setAvatar] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_3F24ubowcq4ap8Lo7rUNteDo1izkSb04AQ&s"
  );

  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle avatar click - opens gallery
  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  // Handle file selection from gallery
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setAvatar(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Smart day input handler
  const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');

    if (value.length <= 2) {
      const numValue = parseInt(value);

      // If empty or valid day (1-31)
      if (value === '' || (numValue >= 1 && numValue <= 31)) {
        setDay(value);

        // Auto-advance logic
        if (value.length === 2) {
          monthRef.current?.focus();
        } else if (value.length === 1 && numValue >= 4) {
          // If user types 4-9, it can only be a single digit day (04-09)
          monthRef.current?.focus();
        }
      }
    }
  };

  // Smart month input handler
  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');

    if (value.length <= 2) {
      const numValue = parseInt(value);

      // If empty or valid month (1-12)
      if (value === '' || (numValue >= 1 && numValue <= 12)) {
        setMonth(value);

        // Auto-advance logic
        if (value.length === 2) {
          yearRef.current?.focus();
        } else if (value.length === 1 && numValue >= 2) {
          // If user types 2-9, it can only be a single digit month (02-09)
          // Month 1 could be 1 or 10-12, so we wait
          yearRef.current?.focus();
        }
      }
    }
  };

  // Smart year input handler with auto-inference
  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    const currentYear = new Date().getFullYear();

    if (value.length <= 4) {
      setYear(value);
    } else if (value.length === 2) {
      // Auto-infer 4-digit year from 2-digit input
      const twoDigitYear = parseInt(value);
      const currentCentury = Math.floor(currentYear / 100) * 100;
      const inferredYear = currentCentury + twoDigitYear;

      // If inferred year is in the future, subtract 100 years
      if (inferredYear > currentYear) {
        setYear((inferredYear - 100).toString());
      } else {
        setYear(inferredYear.toString());
      }
    }
  };

  return (
    <div className="flex h-[100dvh] w-full flex-col bg-black text-white font-sans relative overflow-hidden">
      {/* Logo Placeholder - Top Left */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-8">
        <p className="text-5xl font-semibold Fls">Aetheris</p>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center px-4 sm:px-0 scale-90 sm:scale-100 ">
        <div className="w-full max-w-[400px] space-y-8">
          <div className="text-left space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-white text-center">Profile Setup</h1>
            <p className="text-sm text-gray-400 text-center">Complete your profile to get started with <span className="Astehtic">Aetheris.</span></p>
          </div>

          <form className="mt-8 space-y-4">
            <div className="space-y-4">
              <div>
                <div className="Avatar w-full flex justify-center items-center mb-3">
                  {/* Hidden file input for gallery */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />

                    <div className="User-pfp w-26 h-26 rounded-full border-6 border-black overflow-hidden relative">
                        <img
                          src={avatar}
                          alt=""
                          className="w-26 h-26 object-cover rounded-full mb-5 cursor-pointer"
                          onClick={handleAvatarClick}
                        />
                        <div className="absolute bottom-0 w-full bg-neutral-900/60 p-1 flex items-center justify-center">
                          <FaCamera 
                          onClick={handleAvatarClick}
                          />
                        </div>
                      </div>
                </div>

                
                <label htmlFor="username" className="sr-only">Username</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="bg-neutral-900 px-4 py-4 border border-neutral-800 rounded-xl w-full"
                  placeholder="Username"
                />
              </div>
              <div className="relative">
                <label htmlFor="Displayname" className="sr-only">Displayname</label>
                <input
                  id="Displayname"
                  name="Displayname"
                  type="text"
                  autoComplete="Displayname"
                  required
                  className="bg-neutral-900 px-4 py-4 border border-neutral-800 rounded-xl w-full"
                  placeholder="Display Name"
                />
              </div>

              {/* Smart Date Input - DD MM YYYY */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-400 mb-2 sr-only">Date of Birth</label>
                <div className="grid grid-cols-[1fr_1fr_1.5fr] gap-3">
                  {/* Day Input */}
                  <input
                    type="text"
                    inputMode="numeric"
                    value={day}
                    onChange={handleDayChange}
                    maxLength={2}
                    placeholder="DD"
                    className="bg-neutral-900 px-4 py-4 border border-neutral-800 rounded-xl w-full text-center"
                    required
                  />

                  {/* Month Input */}
                  <input
                    ref={monthRef}
                    type="text"
                    inputMode="numeric"
                    value={month}
                    onChange={handleMonthChange}
                    maxLength={2}
                    placeholder="MM"
                    className="bg-neutral-900 px-4 py-4 border border-neutral-800 rounded-xl w-full text-center"
                    required
                  />

                  {/* Year Input */}
                  <input
                    ref={yearRef}
                    type="text"
                    inputMode="numeric"
                    value={year}
                    onChange={handleYearChange}
                    maxLength={4}
                    placeholder="YYYY"
                    className="bg-neutral-900 px-4 py-4 border border-neutral-800 rounded-xl w-full text-center"
                    required
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="flex w-full justify-center rounded-xl bg-white px-4 py-4 text-sm font-bold text-black hover:bg-gray-200 transition-colors duration-200"
            >
              Continue
            </button>
          </form>


        </div>
      </div>
    </div>
  )
}

export default Page