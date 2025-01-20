import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import type Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';
import type Sample from '../interfaces/Sample.interface';

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    login:"",
    id: 0,
    location: "",
    avatar_url:"",
    email:"",
    html_url: "",
    company:"",
    bio:""  });



    const [candidateIndex, setCandidateIndex] = useState<number>(0); // Track the current candidate index
    const [candidates, setCandidates] = useState<Candidate[]>([]); // Store potential candidates
  

    useEffect(() => {
      let ignore = false;
      
      const fetchCandidate = async () => {
        if (!ignore) {
            await searchForCandidate();
        }
    };
    fetchCandidate();

      return () => { ignore = true; }
      },[]);

    const addToCandidateList = () => {
      const storedCandidates = localStorage.getItem('AddCandidate');
      const parsedCandidates = storedCandidates ? JSON.parse(storedCandidates) : [];
      
      parsedCandidates.push(currentCandidate);
      localStorage.setItem('AddCandidate', JSON.stringify(parsedCandidates));
      alert(`${currentCandidate.login} has been added to your candidate list!`);
      nextCandidate();
    };
  
    const nextCandidate = () => {
      // Logic to show the next candidate
      if (candidateIndex < candidates.length - 1) {
        setCandidateIndex(candidateIndex + 1);
        setCurrentCandidate(candidates[candidateIndex + 1]);
      } else {
        searchForCandidate();
      }
    };

    const searchForCandidate = async () => {
      // e.preventDefault();
      try{
      const x: Sample[] = await searchGithub();
      console.log(x)
      const r = Math.floor(Math.random() * x.length);
      console.log(x[r])
      const data: Candidate = await searchGithubUser(x[r].login);
      
      console.log(data)
      setCurrentCandidate(data);
      setCandidates(prevCandidates => [...prevCandidates, data]);; // Add the new candidate to the list'
      console.log(Response)
      }
      catch(error){  console.log('candidate fail')}
    };


  return (
  <>
  <h1>Super Fast Search Engine</h1>
      
  <body>
    <main>
      <CandidateCard
        currentCandidate={currentCandidate}
        addToCandidateList={addToCandidateList}
        removeFromStorage={nextCandidate}
        onSearch={true}
      />       
          <button type="button" onClick={addToCandidateList}> + </button>     
          <button type="button" onClick={nextCandidate}> - </button>     
        
        </main>
      </body>

  </>
  )

};

export default CandidateSearch;
