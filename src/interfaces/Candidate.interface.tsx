// TODO: Create an interface for the Candidate objects returned by the API

interface Candidate {
login:string,
id: number,
location: string,
avatar_url:any,
email:string,
html_url: string,
company:string,
bio:string
}

export default Candidate;
