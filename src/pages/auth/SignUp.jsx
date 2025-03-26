import React from 'react'

function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen min-w-full bg-gradient-to-br from-blue-400 to-purple-500">
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-center text-2xl font-bold text-black mb-6">
        Sign Up
      </h2>
      <form>

      <div className="mb-4">
          <label
            htmlFor="text"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="name"
            id="name"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-400 focus:border-purple-400 outline-none"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-400 focus:border-purple-400 outline-none"
            placeholder="email address"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-400 focus:border-purple-400 outline-none"
            placeholder="password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 transition"
        >
          SIGNUP
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-gray-600">
        Already have an Account?{" "}
        <a href="#" className="text-purple-500 font-medium hover:underline">
          Log In
        </a>
      </p>
    </div>
  </div>
  )
}

export default SignUp