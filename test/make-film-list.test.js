const test = QUnit.test;

QUnit.module('generate list of films');

function makeFilmList(film) {
    const html = /*html*/
    `<li>
        <a href="">${film.title}</a> (<span>${film.release_date}</span>)
    </li>`;

    const template = document.createElement('template');
    template.innerHTML = html;

    return template.content;
}

const film = {
    title: 'Castle in the Sky',
    release_date: 1986,
    id: '2baf70d1-42bb-4437-b551-e5fed5a87abe'
};

test('make template for list of all films', assert => {
    const result = makeFilmList(film);
    const expected = /*html*/
    `<li>
        <a href="">Castle in the Sky</a> (<span>1986</span>)
    </li>`;

    assert.htmlEqual(result, expected);
});