import Link from 'next/link'
import React from 'react'

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'><span className='blue_gradient'>{type}</span> Post</h1>
      <p className='desc text-left max-w-md'>
        Share your amazing prompts with the world, and let your imagination run wild with any AI-powered platform.
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>Your AI Prompt</span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Generate a semantic and accessible HTML and (framework) CSS [UI component] consisting of [component parts]. The [component parts] should be [layout].'
            className='form_textarea'
            required
          ></textarea>
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-600'>Example <span className='text-gray-400 text-sm'>optional</span></span>
          <textarea
            value={post.example}
            onChange={(e) => setPost({ ...post, example: e.target.value })}
            placeholder='Generate a semantic HTML and Tailwind CSS "Contact Support" form consisting of the users name, email, issue type, and message. The form elements should be stacked vertically and placed inside a card.'
            className='form_textarea_example'
            required
          ></textarea>
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>Tag
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder='#code-generation'
            className='form_input'
            required
          ></input>
        </label>
        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href="/" className='text-gray-500 text-sm'>
            Cancel
          </Link>
          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form