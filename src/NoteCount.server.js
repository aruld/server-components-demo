import {db} from './db.server';

export default function NoteCount({searchText}) {
  const count = db.notes.count({
    where: {
      title: {
        contains: '%' + searchText + '%',
      },
    },
  });
  let singular = 'note';
  let output = singular;
  if (count !== 1) {
    output = `${singular}s`;
  }

  return count > 0 ? (
    <div className="notes-empty">
      <p>
        {count} {output} found
      </p>
    </div>
  ) : (
    <div className="notes-empty">
      <p>No {singular} found</p>
    </div>
  );
}
