import { getRandomInteger, getRandomArrayElement } from './util.js';

const DESCRIPTIONS = [
  'Закат на море 🌅',
  'Утренний кофе ☕',
  'Прогулка по городу 🚶‍♀️',
  'Лучший день! 😍',
  'Пикник с друзьями 🧺',
  'Ночь в горах 🌌',
  'Любимый кот 🐈',
  'Завтрак на террасе 🥐',
  'Выходные с друзьями 🎉',
  'Просто чудесный день 🌞'
];

const NAMES = ['Анна', 'Дима', 'Катя', 'Илья', 'Марина', 'Олег', 'София', 'Никита', 'Вика', 'Кирилл'];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делали эту фотографию, у меня упал телефон от зависти 😆',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота — и то снимок лучше.',
  'Лайк за позитив 🔥',
  'Шикарное фото! 💕'
];

const createComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createPhotoDescription = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: Array.from({ length: getRandomInteger(1, 5) }, (_, index) =>
    createComment(index + 1)
  ),
});

const createPhotos = () => Array.from({ length: 25 }, (_, index) => createPhotoDescription(index + 1));

export { createPhotos };
