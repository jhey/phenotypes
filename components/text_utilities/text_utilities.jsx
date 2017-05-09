import React from 'react';

function TextUtilities(props) {
  return (
    <div>
      <div className="d-flex-sm">
        <div style={ { marginRight: '2rem' } }>
          <code className="text-color-secondary">.text-1</code>
          <p className="text-1">Regular 12px</p>
          <hr />
          <code className="text-color-secondary">.text-2</code>
          <p className="text-2">Regular 14px</p>
          <hr />
          <code className="text-color-secondary">.text-3</code>
          <p className="text-3">Regular 16px</p>
          <hr />
          <code className="text-color-secondary">.text-4</code>
          <p className="text-4">Regular 18px</p>
          <hr />
          <code className="text-color-secondary">.text-5</code>
          <p className="text-5">Regular 21px</p>
          <hr />
          <code className="text-color-secondary">.text-6</code>
          <p className="text-6">Regular 24px</p>
          <hr />
          <code className="text-color-secondary">.text-7</code>
          <p className="text-7">Regular 36px</p>
          <hr />
          <code className="text-color-secondary">.text-8</code>
          <p className="text-8">Regular 53px</p>
        </div>
        <div>
          <code className="text-color-secondary">.text-1.text-weight-bold</code>
          <p className="text-1 text-weight-bold">Bold 12px</p>
          <hr />
          <code className="text-color-secondary">.text-2.text-weight-bold</code>
          <p className="text-2 text-weight-bold">Bold 14px</p>
          <hr />
          <code className="text-color-secondary">h6, .h6</code>
          <p className="h6">Bold 16px</p>
          <hr />
          <code className="text-color-secondary">h5, .h5</code>
          <p className="h5">Bold 18px</p>
          <hr />
          <code className="text-color-secondary">h4, .h4</code>
          <p className="h4">Bold 21px</p>
          <hr />
          <code className="text-color-secondary">h3, .h3</code>
          <p className="h3">Bold 24px</p>
          <hr />
          <code className="text-color-secondary">h2, .h2</code>
          <p className="h2">Bold 36px</p>
          <hr />
          <code className="text-color-secondary">h1, .h1</code>
          <p className="h1">Bold 53px</p>
        </div>
      </div>

    </div>
  );
}

module.exports = TextUtilities;
