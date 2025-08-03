import {Container, Row, Col} from 'react-bootstrap';
import {useState, useEffect, useContext} from 'react';
import UserContext from '../UserContext';
import ProjectCard from './ProjectCard';


export default function Project(){
	const [projects, setProjects] = useState([]);
	const {user} = useContext(UserContext);

	const fetchData = async () => {
		try {
			const fetchUrl = `${process.env.REACT_APP_API_URL}projects/`;
			const response = await fetch(fetchUrl);
    		const data = await response.json(); // ✅ this is the actual data array

    setProjects(data); // ✅ store usable JSON in state
    console.log(projects);
} catch (error) {
	console.error("Failed to fetch projects:", error);
	setProjects([]);
}

}

useEffect(() => {
	fetchData();
}, [user])
return(
	<section className="section">
		<content>
			<Container>
				<Row>
					<h3>Check out some of my latest works</h3>
					<h1> PROJECTS </h1> 
						{/*Tools Used*/}
					<Col>
					{
						projects.map(project => {
							return (
								<ProjectCard key={project._id} projectProp = {project}/>
								)
						})
					}
					</Col>

			</Row>
		</Container>
	</content>
</section>
)
}