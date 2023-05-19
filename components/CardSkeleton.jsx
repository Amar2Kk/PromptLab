
const CardSkeleton = () => {
  return (
    <div className='prompt_card skeleton'>
      <div role="status" class="space-y-2.5 animate-pulse max-w-lg">
        <div class="flex items-center justify-start mt-1">
          <svg class="w-10 h-10 mr-2 text-gray-200 dark:text-gray-700" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
          <div class="w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mr-3"></div>
          <div class="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="flex items-center w-full space-x-2 max-w-[400px]">
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        </div>
        <div class="flex items-center w-full space-x-2 max-w-[480px]">
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        </div>
        <div class="flex items-center w-full space-x-2 max-w-[440px]">
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
        </div>
        <div class="flex items-center w-full space-x-2 max-w-[360px]">
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        </div>
        <div class="w-20 h-2.5 mt-10 bg-gray-200 rounded-full dark:bg-gray-700 mr-3"></div>

        <span class="sr-only">Loading...</span>
      </div>

    </div>
  )
}

export default CardSkeleton