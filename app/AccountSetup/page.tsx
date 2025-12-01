'use client';
import { useState, useRef } from "react";
import { MdEdit } from "react-icons/md";

const Page = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

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
                <div className="Avatar w-full flex justify-center items-center">
                  <img
                    className="w-24 h-24 rounded-full mb-5 cursor-pointer"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_3F24ubowcq4ap8Lo7rUNteDo1izkSb04AQ&s"
                    alt="" />
                  <MdEdit
                    className=" w-8 h-8  absolute mt-12 ml-17 cursor-pointer text-yellow-300"
                  />
                </div>
                <label htmlFor="username" className="sr-only">Username</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="block w-full rounded-xl bg-[#1C1C1C] border-none px-4 py-3.5 text-white placeholder-gray-500 focus:ring-2 focus:ring-white/20 sm:text-sm"
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
                  className="block w-full rounded-xl bg-[#1C1C1C] border-none px-4 py-3.5 text-white placeholder-gray-500 focus:ring-2 focus:ring-white/20 sm:text-sm"
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
                    className="block w-full rounded-xl bg-[#1C1C1C] border-none px-4 py-3.5 text-white placeholder-gray-500 focus:ring-2 focus:ring-white/20 sm:text-sm text-center"
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
                    className="block w-full rounded-xl bg-[#1C1C1C] border-none px-4 py-3.5 text-white placeholder-gray-500 focus:ring-2 focus:ring-white/20 sm:text-sm text-center"
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
                    className="block w-full rounded-xl bg-[#1C1C1C] border-none px-4 py-3.5 text-white placeholder-gray-500 focus:ring-2 focus:ring-white/20 sm:text-sm text-center"
                    required
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="flex w-full justify-center rounded-xl bg-white px-4 py-3.5 text-sm font-bold text-black hover:bg-gray-200 transition-colors duration-200"
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