// Component Imports
import Header from './components/Header';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';

// Why Import Project Data Here?
import projects from './projects';

const App = () => {
  // console.log(projects);
  
  return (
    <>
      {/* <div className="App">Project Showcase</div> */}
      <Header />
      <ProjectForm />
      <ProjectList projects={projects}/>
    </>
  );
}

export default App;
