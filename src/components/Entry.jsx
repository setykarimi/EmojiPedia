import React from 'react';

function Entry(props) {
    return (
        <div className="card">
            <dl>
                <dt>
                    <span className="emoji" role="img">
                        {props.emoji}
                    </span>
                </dt>
                <span className="name">{props.name}</span>
                <dd>{props.description}</dd>
            </dl>
        </div>
    )
}

export default Entry;