const baseurl =  process.env.NODE_ENV === 'production' 
? '/api'
: 'http://localhost:8000' ;



export default baseurl;