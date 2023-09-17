Handlebars.registerPartial('footer',`<footer  class="footer">
<div style="background-color: #28658a;" class="d-flex justify-content-center">
    <div class="row container">
        <div class="col-md-4 col-sm-12 text-center">
            <p class="h5 mt-3" style="color: #aaabb8;">About</p>
            <p class="text-sm-left">Discover the future with World Tech News. Your brief, authoritative source for the latest in global technology trends, news, and breakthroughs. Join us in exploring the ever-changing tech landscape.</p>
        </div>
        <div class="col-md-4 col-sm-12 text-center">
            <p class="h5 mt-3" style="color: #aaabb8;">Site map</p>
            <ul class="list-unstyled">
               <li><a href="/">Home</a></li>
			   <li><a href="/">All news</a></li>
               <li><a href="/">Report</a></li>
               <li><a href="">New preview</a></li>
            <ul>
        </div>
        <div class="col-md-4 col-sm-12 text-center">
            <p class="h5 mt-3" style="color: #aaabb8;">Stay Connected</p>
            <div class="row g-3 align-items-center p-0 mb-3 justify-content-center">
                <div class="col-6">
                  <input style=" border: none; background: none !important; border-radius: 0px;" type="email" placeholder="Email address" id="email" class="form-control border-bottom" aria-describedby="email">
                </div>
                <div class="col-auto">
                    <button type="submit" style="background-color: #25274D;" class="btn btn-primary col-auto">Subscribe</button>
                </div>
                <div class="row text-center mt-3">

                    <div class="col-4">
                        <a class="fs-3 text-white">
                            <i class="bi bi-twitter"></i>
                        </a>
                    </div>

                    <div class="col-4">
                        <a class="fs-3 text-white">
                            <i class="bi bi-facebook"></i>
                        </a>
                    </div>


                    <div class="col-4">
                        <a class="fs-3 text-white">
                            <i class="bi bi-instagram"></i>
                        </a>
                    </div>


                    <div class="col-4">
                        <a class="fs-3 text-white">
                            <i class="bi bi-linkedin"></i>
                        </a>
                    </div>

                    <div class="col-4">
                        <a class="fs-3 text-white">
                            <i class="bi bi-envelope-fill"></i>
                        </a>
                    </div>

                    <div class="col-4">
                        <a class="fs-3 text-white">
                            <i class="bi bi-telephone-fill"></i>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
</footer> `)

const containerFooter = document.getElementById('footer-container')
const footerTemplate = document.getElementById('footer-template');
const footerTemplateCompiled = Handlebars.compile(footerTemplate.innerHTML);
containerFooter.innerHTML = footerTemplateCompiled()