import type React from 'react';
import { useState, useEffect } from 'react';
import type Candidate from '../interfaces/Candidate.interface';
import CandidateToWatchList from '../components/CandidateToWatchList';

const SavedCandidates = () => {
  
  const [candidateToWatch, setCandidateToWatch] = useState<Candidate[]>([]);

  const removeFromStorage = (
    e: React.MouseEvent<HTMLElement>,
    onWatchList: boolean | null | undefined,
    Login: string | null

  ) => {
    e.preventDefault();
    if (onWatchList) {
      let parsedCandidateToWatch: Candidate[] = [];

      const storedCandidateToWatch = localStorage.getItem('AddCandidate');
      if (typeof storedCandidateToWatch === 'string') {
        parsedCandidateToWatch = JSON.parse(storedCandidateToWatch);
      }
      parsedCandidateToWatch = parsedCandidateToWatch.filter(
        (candidate) => candidate.login !== Login
      );
      setCandidateToWatch(parsedCandidateToWatch);
      localStorage.setItem('AddCandidate', JSON.stringify(parsedCandidateToWatch));
    } 
  };

  useEffect(() => {
    const parsedCandidateToWatch = JSON.parse(
      localStorage.getItem('AddCandidate') as string
    );
    setCandidateToWatch(parsedCandidateToWatch);
  }, []);
  
  return (
    <>
      <h1>Potential Candidates</h1>
      {(!candidateToWatch?.length || candidateToWatch?.length === 0) ? (
        <h1 style={{ margin: '16px 0' }}>Add Candidates to your watchlist.</h1>
      ) : (
        <table className='table'>  
        <thead>
          <tr>
            <th>Avator</th>
            <th>Username</th>
            <th>Location</th>
            <th>Company</th>
            <th>Bio</th>
          </tr>
        </thead>
        
          
        <CandidateToWatchList
          candidateToWatch={candidateToWatch}
          // onWatchList={true}
          removeFromStorage={removeFromStorage}
        />
        
        </table>
      )}
      </>)
      
    }

export default SavedCandidates;
