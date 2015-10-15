import React from 'react';

export default class Card extends React.Component {
  render () {
    return (
      <div className="cards">
        <div className="card">
          <div className="card-image">
            <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/mountains.png" alt="" />
          </div>
          <div className="card-header">
            First Card
          </div>
          <div className="card-copy">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, officiis sunt neque facilis culpa molestiae necessitatibus delectus veniam provident.</p>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/mountains-4.png" alt="" />
          </div>
          <div className="card-header">
            Another Card
          </div>
          <div className="card-copy">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, officiis sunt neque facilis culpa molestiae necessitatibus delectus veniam provident.</p>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/mountains-3.png" alt="" />
          </div>
          <div className="card-header">
            The Last Card
          </div>
          <div className="card-copy">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    )
  }
}
