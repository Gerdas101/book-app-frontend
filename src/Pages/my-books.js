export default function MyBooks() {
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
            <button class='btn-delete'>Delete</button>
          </div>
          <div class='col-2'>
            <div class='book-info'>
              <h1 class='book-title'>
                Harry potter and the philosopher's stone
              </h1>
              <p class='book-author'>J.K. Rowling</p>
              <p class='book-realise-date'>October 1, 1998</p>
              <p class='book-description'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laudantium laborum hic mollitia sit quos suscipit accusantium
                quas, deleniti at, quis veniam nam excepturi error porro iste
                architecto eligendi doloremque repellat aspernatur alias atque
                minus quasi. Ex quibusdam eius aspernatur doloremque quisquam
                adipisci tempora vel sapiente quae aliquam voluptates saepe, sed
                tempore illum! Expedita nulla voluptatum doloremque neque
                necessitatibus esse ipsum?
              </p>
            </div>
            <div class='book-additional-info'>
              <label>Pages read:</label>
              <p>98/200</p>
              <label>Notes:</label>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                natus quis cupiditate, distinctio, odio nostrum quas ea eveniet
                dicta quod libero quaerat sit fuga sed voluptatem dolor
                assumenda. Tempora, quam!
              </p>
            </div>
            <button class='btn-edit'>Edit</button>
          </div>
        </div>
      </div>
    </main>
  )
}
