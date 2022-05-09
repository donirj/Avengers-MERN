import React from 'react'

function Header() {
  return (
    <>
    <nav class="py-2 bg-light border-bottom">
      <div class="container d-flex flex-wrap">
        {/* <ul class="nav me-auto">
          <li class="nav-item"><a href="#" class="nav-link link-dark px-2 active" aria-current="page">Home</a></li>
          <li class="nav-item"><a href="#" class="nav-link link-dark px-2">Features</a></li>
          <li class="nav-item"><a href="#" class="nav-link link-dark px-2">Pricing</a></li>
          <li class="nav-item"><a href="#" class="nav-link link-dark px-2">FAQs</a></li>
          <li class="nav-item"><a href="#" class="nav-link link-dark px-2">About</a></li>
        </ul> */}
        <ul class="nav">
          <li class="nav-item"><a href="#" class="nav-link link-dark px-2">Login</a></li>
          <li class="nav-item"><a href="#" class="nav-link link-dark px-2">Sign up</a></li>
        </ul>
      </div>
    </nav>
    <header class="py-3 mb-4 border-bottom">
      <div class="container d-flex flex-wrap justify-content-center">
      <ul class="nav me-auto">
          <li class="nav-item"><a href="/" class="nav-link link-dark px-2 active" aria-current="page">Home</a></li>
          <li class="nav-item"><a href="/create" class="nav-link link-dark px-2">Create character</a></li>
          <li class="nav-item"><a href="#" class="nav-link link-dark px-2">Pricing</a></li>
          <li class="nav-item"><a href="#" class="nav-link link-dark px-2">FAQs</a></li>
          <li class="nav-item"><a href="#" class="nav-link link-dark px-2">About</a></li>
        </ul>
        {/* <form class="col-12 col-lg-auto mb-3 mb-lg-0">
          <input type="search" class="form-control" placeholder="Search..." aria-label="Search"/>
        </form> */}
      </div>
    </header>
    </>
  )
}

export default Header