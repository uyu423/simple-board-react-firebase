
import React, { Component } from 'react';
import { Button, Post } from '../components';

class List extends Component {
  render() {
    return (
      <div>
        <h1>이건 간단 게시팔이야</h1>
        <Post header="이건 제목이야" body="이건 본문이야" />
        <Post header="으으으" body="로또나됐으면" />
        <Post header="vim으로" body="react 코딩하기 지옥수준" />
      </div>
    );
  }
}

export default List;
