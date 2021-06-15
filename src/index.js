import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import Component from './components';
import Input from './input';
import faker from 'faker'
import ApprovalCard from './ApprovalCard';

// Create a react component

if (module.hot) {
    module.hot.accept();
  }

  const App = () => {
      return (
          <div>
         {/* <Input/> */}
        {/* <Component/> */}
        <ApprovalCard>
        <CommentDetail
            image= {faker.image.avatar()}
            author={"Jessie"}
            date={new Date().toLocaleTimeString()}
            comment={"Excellent post!"}
        />
        </ApprovalCard>
        <ApprovalCard>
        <CommentDetail
            image= {faker.image.avatar()}
            author={"Sam"}
            date={new Date().toLocaleTimeString()}
            comment={"HG!"}

        />
        </ApprovalCard>
        <ApprovalCard>
        <CommentDetail
            image= {faker.image.avatar()}
            author={"Jaime"}
            date={new Date().toLocaleTimeString()}
            comment={"What a post!"}
        />
        </ApprovalCard>
        <ApprovalCard>
        <CommentDetail
            image= {faker.image.avatar()}
            author={"Monica"}
            date={new Date().toLocaleTimeString()}
            comment={"Hey!"}
        />
        </ApprovalCard>
          </div>
      );
  };

// Take the react component and show it on

ReactDOM.render(<App/>, document.getElementById('root'));
