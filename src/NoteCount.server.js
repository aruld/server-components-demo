import {db} from './db.server';

export default function NoteCount({searchText}) {
    // const notes = fetch('http://localhost:4000/notes').json();
  
    // WARNING: This is for demo purposes only.
    // We don't encourage this in real apps. There are far safer ways to access
    // data in a real application!
    // const notes = db.query(
    //   `select * from notes where title ilike $1`, ['%' + searchText + '%']
    // ).rows;
    const notes = db.notes.findMany()
    let count = notes.length;
    let singular = 'note';
    let output = singular
    if (count !== 1) {
      output = `${singular}s`
    }

    return count > 0 ? (
        <div className="notes-empty">
            <p>{notes.length} {output} found</p>
         </div>   
    ) : (
        <div className="notes-empty">
            <p>No {singular} found</p>
         </div>
    );
  }