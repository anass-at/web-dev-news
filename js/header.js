Handlebars.registerPartial('header',`
<nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="background: #25274D !important;">
<div class="container">
  <a class="navbar-brand d-flex" href="index.html" >
  <i class="bi bi-newspaper display-5 me-2"></i>
    
    <div class="ms-2 me-2"> 
        <span class="d-block m-0 p-0">World Tech News</span>
        <span class="d-block m-0 p-0 small" style="color: #e42a1d"><small>All you need to know</small></span>
    </div>
  </a>

  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse text-center" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center w-100">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="all-news.html">News</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" href="report.html">Report</a>
      </li>
     
    </ul>
    
    <form class="d-flex">
      <a class="btn btn-outline-success" href="search.html?" style="border-color: white;color:white">search</a>
    </form>
  </div>
</div>
</nav>
    `)

    const containerHeader = document.getElementById('container-header')
    const headerTemplate = document.getElementById('header-template');
    const headerTemplateCompiled = Handlebars.compile(headerTemplate.innerHTML  );
    containerHeader.innerHTML = headerTemplateCompiled()
