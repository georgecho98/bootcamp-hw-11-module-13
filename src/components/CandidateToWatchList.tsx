import type React from 'react';
import type Candidate from '../interfaces/Candidate.interface';
// import CandidateCard from './CandidateCard';

interface CandidateToWatchProps {
  candidateToWatch: Candidate[];
  removeFromStorage:
    | ((
        e: React.MouseEvent<HTMLElement>,
        onWatchList: boolean | null | undefined,
        Login: string | null
      ) => void);
}

const CandidateToWatchList = ({
  candidateToWatch,
  
  removeFromStorage,
}: CandidateToWatchProps) => {


  return (
    <>
      {candidateToWatch.map((candidate) => (
        
        <tr 
        
        key={candidate.login}>              
            {/* {<CandidateCard
            currentCandidate={candidate}
            key={candidate.login}
            onWatchList={true}
            removeFromStorage={removeFromStorage}
            /> } */}
          
          <td> <img src={`${candidate.avatar_url}`} alt ={`${candidate.login}` }
          style ={{backgroundSize:'cover',width:'200px', height:'200px'}}
          ></img> </td>
         
          <td>{candidate.login || 'Not available'}</td>
          <td>{candidate.location || 'Not available'} </td>
          <td>{candidate.company || 'Not available'} </td>
          <td>{candidate.bio || 'Not available'}</td>
          <td><button type="button" 
          onClick={(e)=>
          
          removeFromStorage(e, true, candidate.login)}> - </button></td>
       </tr>
      ))}
    </>      
        
    )
 }

export default CandidateToWatchList;

