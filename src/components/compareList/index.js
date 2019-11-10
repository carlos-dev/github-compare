import React from 'react';

import { Container } from './styles';
import { Repository } from './styles';

const CompareList = () => (
  <Container>
    <Repository>
      <header>
        <img src="https://avatars3.githubusercontent.com/u/69631?v=4" alt="facebook" />
        <strong>react</strong>
        <small>facebook</small>
      </header>

      <ul>
        <li>
          95,388 <small>start</small>
        </li>
        <li>
          95,388 <small>forks</small>
        </li>
        <li>
          95,388 <small>issues</small>
        </li>
        <li>
          95,388 <small>last commit</small>
        </li>
      </ul>
    </Repository>
    <Repository>
      <header>
        <img src="https://avatars3.githubusercontent.com/u/69631?v=4" alt="facebook" />
        <strong>react</strong>
        <small>facebook</small>
      </header>

      <ul>
        <li>
          95,388 <small>start</small>
        </li>
        <li>
          95,388 <small>forks</small>
        </li>
        <li>
          95,388 <small>issues</small>
        </li>
        <li>
          95,388 <small>last commit</small>
        </li>
      </ul>
    </Repository>
  </Container>
);

export default CompareList;
