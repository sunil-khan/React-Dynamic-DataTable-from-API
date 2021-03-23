	import React, { useState, useEffect, useMemo} from 'react'
	import Datatable from './components/Datatable'
	import Header from './components/Header'
	import Search from './components/Search'
	import { Typography } from 'antd'
	import Styles from './appStyles.module.css'


	const App = () => {

	const [projects, setProjects] = useState([]);
	const [totalItems, setTotalItems] = useState(0);
	const [search, setSearch] = useState("");
	const [sorting, setSorting] = useState({ field: "", order: "" });


	useEffect(() => 
	{
		fetch("https://sievo-react-assignment.azurewebsites.net/api/data")
			.then(response => response.json())
			.then(json => {
				setProjects(json);
				console.log(json);
				
			});
	}, []);

	const projectsData = useMemo(() => 
	{
		let computedProjects = projects;

		// Search on Description
		if (search) 
		{
			computedProjects = computedProjects.filter(project => project.description.indexOf(search) > -1)
		}

	//Sorting projects
		if (sorting.field) 
		{
			// console.log(sorting.field)
			const reversed = sorting.order === "asc" ? 1 : -1;
				computedProjects = computedProjects.sort(
					(a, b) =>
						reversed * a[sorting.field].localeCompare(b[sorting.field])
				);

		}
			return (computedProjects)
	}, [projects, search, sorting])



	return (
		<div className={`${Styles.marginTop} container`}>
			<h4 className="text-center">Sievo Assignment</h4>
			<h5 className="text-center">Project's Record</h5>
			<div className="col-12">
				<div className={Styles.marginBottom}> 
					<Search onSearch={value => 
					{
							setSearch(value);
					}}
					/>
				</div>
			<table className="table table-bordered table-hover text-center" >
				<Header projects={projects} onSorting={ (field, order) => setSorting({field, order}) }/>
				<Datatable projectsData={projectsData} />
				
			</table>
			</div>
		</div>
	)
	}

	export default App;
