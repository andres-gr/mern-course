import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useProjectsStore } from 'Api/projects'

const Home: FC = () => {
  const projects = useProjectsStore(state => state.projects)

  const fetchProject = useProjectsStore(state => state.fetchProject)

  return (
    <div>
      <div>
        <Link
          to="/one"
        >
          One
        </Link>
      </div>
      <span>Home</span>
      <div>
        <button
          type="button"
          onClick={ fetchProject }
        >
          press
        </button>
      </div>
      {
        projects.map(({
          author,
          company,
          id,
        }) => (
          <p key={ id }>
            <span>{ company }</span>
            { ' - ' }
            <span>{ author }</span>
          </p>
        ))
      }
    </div>
  )
}

export default Home
