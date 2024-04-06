import { useParams } from 'react-router-dom';

function NewPlace() {
  const { placeId } = useParams();

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={onFormSubmit}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      <div
        style={{ display: 'flex', justifyContent: 'space-between', width: '250px', margin: '20px' }}
      >
        <label name="title">title</label>
        <input type="text" placeholder="title"></input>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '250px',
          margin: '0px 0px 20px'
        }}
      >
        <label name="description">description</label>
        <input type="text" placeholder="description" style={{ height: '100px' }}></input>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '200px' }}>
        <button type="submit">{placeId ? 'update' : 'add place'}</button>
      </div>
    </form>
  );
}

export default NewPlace;
