import React from 'react';

const styles = {
  title: {
    margin: 3,
  },
  subtitle: {
    margin: 0,
  },
};

export default function Card(props) {
  const { title, subtitle, children } = props;

  return (
    <div className="card">
      { getHeader(title, subtitle) }

      <div className="card-content">
        { children }
      </div>
    </div>
  );
}

function getHeader(title, subtitle) {
  if (!title) return null;

  return (
    <div className="card-header">
      <h4 style={styles.title}>{ title }</h4>
      { subtitle
          ? <p style={styles.subtitle}>{ subtitle }</p>
          : null }
    </div>
  );
}
