import ProjectListItem from "./ProjectListItem";
import { useState, useEffect } from "react";
import { NavLink, useHistory, useParams, useRouteMatch, useLocation } from "react-router-dom";
import { Button, Input } from "./shared";

const ProjectList = ({
  projects,
  onProjectEdit,
  onProjectDelete,
  setSelectedPhase,
  setSearchQuery
}) => {
  const [searchInputText, setSearchInputText] = useState("");
  const { phase } = useParams();
  // useLocation provides access to query parameters as search
  const { search } = useLocation();
  // useHistory gives access to the history object so we can update the url
  const history = useHistory();
  // useRouteMatch used to access the url without any query parameters
  const { url } = useRouteMatch(); 

  
  console.log('useLocation() search', search);
  console.log('useRouteMatch url', url);


  const projectItems = projects.map((project) => {
    return (
      <ProjectListItem
        key={project.id}
        project={project}
        onProjectEdit={onProjectEdit}
        onProjectDelete={onProjectDelete}
      />
    );
  });

  const handleOnChange = (e) => setSearchInputText(e.target.value);

  useEffect(() => {
    const scheduledUpdate = setTimeout(() => {
      setSearchQuery(searchInputText);
      // when we debounce and update the fetch request we also want to:
      // update the url with the contents of the search input text
      // we use the url from useRouteMatch to access the current route
      // without query parameters
      // currently this could be /projects or /projects/phase/5
      // we'll add on a query parameter containing the search text or 
      // remove the query parameter if the search input is empty
      if (searchInputText) {
        history.push(`${url}?${new URLSearchParams({q: encodeURI(searchInputText)}).toString()}`)
      } else {
        history.push(`${url}`)
      }
    }, 300)
    
    return () => {
      clearTimeout(scheduledUpdate);
    }
  }, [setSearchQuery, searchInputText, history, url])

  useEffect(() => {
    setSelectedPhase(phase);
  }, [phase, setSelectedPhase])

  useEffect(() => {
    // this effect depends on the search query parameter from the url:
    // For example: ?q=code
    // it will update the state for the text input to match the value
    // in the URL (used when sharing search results with others by link)
    // For more info on how this works, feel free to read the docs below:
    // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/get
    setSearchInputText(new URLSearchParams(search).get('q'))
  }, [search])

  // In the NavLinks, passing an object as the to prop 
  // value is necessary as we don't want to lose the
  // query parameter that matches up to our search
  // input value
  // If we pass an object we can pass both the
  // pathname and the search (query) parameters so
  // they aren't lost when we filter by phase
  // https://v5.reactrouter.com/web/api/Link/to-object
  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <Button as={NavLink}
          exact to={{
            pathname: "/projects",
            search: search
          }}
        >
          All
        </Button>
        <Button as={NavLink}
          to={{
            pathname: "/projects/phase/5",
            search: search
          }}
        >
          Phase 5
        </Button>
        <Button as={NavLink}
          to={{
            pathname: "/projects/phase/4",
            search: search
          }}
        >
          Phase 4
        </Button>
        <Button as={NavLink}
          to={{
            pathname: "/projects/phase/3",
            search: search
          }}
        >
          Phase 3
        </Button>
        <Button as={NavLink}
          to={{
            pathname: "/projects/phase/2",
            search: search
          }}
        >
          Phase 2
        </Button>
        <Button as={NavLink} 
          to={{
            pathname: "/projects/phase/1",
            search: search
          }}
        >
          Phase 1
        </Button>
      </div>
      <Input type="text" placeholder="Search..." onChange={handleOnChange} value={searchInputText} />

      <ul className="cards">{projectItems}</ul>
    </section>
  );
};

export default ProjectList;
