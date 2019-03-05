export function makeFilmList(film) {
    const html = /*html*/
    `<li>
        <a href="">${film.title}</a> (<span>${film.release_date}</span>)
    </li>`;

    const template = document.createElement('template');
    template.innerHTML = html;

    return template.content;
}