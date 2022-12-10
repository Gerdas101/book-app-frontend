export default function Books() {
  return (
    <main>
      <div class='container-search'>
        <input type='text' class='textbox-search' placeholder='book title' />
        <button class='btn-search'>SEARCH</button>
      </div>
      <div class='container-list'>
        <div class='widget widget-book'>
          <div class='col-1'>
            <img src='/images/hp.jpg' alt='photo' />
          </div>
          <div class='col-2'>
            <div class='book-info'>
              <h1 class='book-title'>
                Harry potter and the philosopher's stone
              </h1>
              <p class='book-author'>J.K. Rowling</p>
              <p class='book-realise-date'>October 1, 1998</p>
              <p class='book-description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur veniam nemo dolor, exercitationem incidunt doloribus
                rerum lo eum optio? nemo dolor, exercitationem incidunt
                doloribus rerum lo eum optio? nemo dolor, exercitationem
                incidunt doloribus rerum lo eum optio? nemo dolor,
                exercitationem incidunt doloribus rerum lo eum optio? nemo
                dolor, exercitationem incidunt doloribus rerum lo eum optio?
                nemo dolor, exercitationem incidunt doloribus rerum lo eum
                optio? nemo dolor, exercitationem incidunt doloribus rerum lo
                eum optio?
              </p>
            </div>
            <button class='btn-add'>Add</button>
          </div>
        </div>

        <div class='widget widget-book'>
          <div class='col-1'>
            <img src='/images/hp2.jpg' alt='photo' />
          </div>
          <div class='col-2'>
            <div class='book-info'>
              <h1 class='book-title'>
                Harry Potter and the Chamber of Secrets
              </h1>
              <p class='book-author'>J.K. Rowling</p>
              <p class='book-realise-date'>September 1, 2000</p>
              <p class='book-description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur veniam nemo dolor, exercitationem incidunt doloribus
                rerum lo eum optio?
              </p>
            </div>
            <button class='btn-add'>Add</button>
          </div>
        </div>
      </div>
    </main>
  )
}
