import _ from 'lodash';

const commentText = `Всё отлично!
  В целом всё неплохо. Но не всё.
  Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.
  Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.
  Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.
  Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!`;

const names = ['Эомер', 'Фродо', 'Арагорн', 'Арвэн', 'Эовин'];

const messages = commentText.split(new RegExp('[!\.?]+', 'g'))
  .map((e) => e.trim())
  .filter((e) => !_.isEmpty(e));

let commentCounter = 0;

const generateComment = () => {
  const comments = _.sampleSize(messages, 2);
  return {
    id: ++commentCounter,
    avatar: `img/avatar-${_.random(1, 6)}.svg`,
    message: _.random(2) === 2 ? `${comments[0]}. ${comments[1]}` : comments[0],
    name: _.sample(names)
  };
};

const generateUser = (id) => {
  const commentsList = Array.from({length: _.random(5)}, generateComment);
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: `пользователь ${id}`,
    likes: _.random(15, 200),
    comments: commentsList
  };
};

export const userList = _.range(25)
  .map((e) => generateUser(e));

