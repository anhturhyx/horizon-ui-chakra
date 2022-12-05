import Map from './map'
function seemap() {
  const key = 'AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg'

  return (
    <div className="seemap">
          <header>
            Map Demo
          </header>
          <Map 
            googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyB30EhG9aaFFjGwbcgdPA37IIf7CPahWNk&callback=initMap'}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `90vh`, margin: `auto`, border: '2px solid black' }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
    </div>
  );
}

export default seemap;
