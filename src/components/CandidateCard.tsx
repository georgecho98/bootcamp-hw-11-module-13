import type React from 'react';
import type Candidate from '../interfaces/Candidate.interface';
// import { IoEyeOutline } from 'react-icons/io5';
// import { ImCross } from 'react-icons/im';
// import { CgPlayListAdd } from 'react-icons/cg';


type CandidateCardProps = {
    currentCandidate: Candidate;
    addToCandidateList?: (() => void) | null;
    nextCandidate?: (() => void) | null;
    onSearch?: boolean | null;
    onWatchList?: boolean | null;
    
    removeFromStorage?: 
      | ((
          e: React.MouseEvent<SVGSVGElement, MouseEvent>,
          currentlyOnCandidateList: boolean | null | undefined,
          login: string | null
        ) => void)
      | null;
  };
  
  const CandidateCard = ({
    currentCandidate,
    // addToCandidateList,
    // nextCandidate, 
    onSearch,
    onWatchList, 
    // removeFromStorage,
  }: CandidateCardProps) => {
    return (
      <>
        {currentCandidate?.login ? (
          <section >
            <figure>
              <img src={`${currentCandidate.avatar_url}`} alt='' />
            </figure>
            <article>
              <p>
                Login Name: {currentCandidate.login}</p>
              <p>
                Email: {currentCandidate.email}
              </p>
              <p>
                Location: {currentCandidate.location}
              </p>
              <p>
                HTML: {currentCandidate.html_url}
              </p>
              <p>
                Company: {currentCandidate.company}
              </p>
            </article>
           
            {onSearch || onWatchList? (
               <p></p>         
              ) : (
              <section>
                {/* <CgPlayListAdd
                  style={{ fontSize: '50px', cursor: 'pointer' }}
                  onClick={() => addToCandidateList?.()}
                />
                <IoEyeOutline
                  style={{ fontSize: '50px', cursor: 'pointer' }}
                  onClick={() => nextCandidate?.()}
                /> */}
              </section>
            )}
          </section>
        ) : (
          <p style={{ margin: '16px 0' }}></p>
        )}
      </>
    );
  };
  
  export default CandidateCard;
  