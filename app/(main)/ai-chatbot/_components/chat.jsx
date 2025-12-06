"use client"
import { BrainCircuit } from "lucide-react";

export default function Chat() {

  return (
    <div className="w-full mx-auto flex flex-col text-gray-800 font-sans px-2 md:px-5">
      
        <div className="flex-1 w-fit mx-auto flex flex-col gap-2 items-center justify-center px-14 py-10 rounded-md mt-6 text-center bg-slate-100">
           <div className="p-10 rounded-full bg-white">
             <BrainCircuit className="w-24 h-24 text-purple-600"/>
           </div>
          <h1 className="text-4xl gradient-title font-bold tracking-normal">
            AI Career Guide
          </h1>
          <p className="text-lg mt-1">
            Ask me anything about technology, skills, and career paths.
          </p>
        </div>
      
      <form
        className="flex w-full p-4 bg-white fixed bottom-0 left-0 right-0"
      >
        <input
          type="text"
          placeholder="Type your question here..."
          className="flex-1 bg-slate-200 text-gray-800 rounded-full py-3 px-6 mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-full py-3 px-6 font-semibold hover:bg-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send
          </button>
      </form>
    </div>
  );
}