import _ from 'lodash';
import {messages, names} from './dictionary';
import {userCount} from './settings';

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
    id: id, url: `photos/${id}.jpg`, description: `пользователь ${id}`, likes: _.random(15, 200), comments: commentsList
  };
};

const users = () => _.range(userCount)
  .map((e) => generateUser(e));

export {users};
