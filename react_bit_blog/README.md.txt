#BIT Blog

## Technology used
-React, create-react-app;

## Page structure/decomposition

	<Header>
		<Link to ="Home">
		<Link to ="Authors">
		<Link to ="About">
	<Header/>
	<Main>
		<Router>
			<Route exact path ="/Home" component Home >
				<Title/>
				<PostList>
					<Link to "/posts/">
						<Post>
					<Link/> 
			<Route/>
			<Route exact path ="/Authors" component Authors >
				<Title/>
				<AuthorList>
					<Link to "/authors/">
						<Author>
					<Link/> 
			<Route/>
				
			<Route exact path ="/About" component About >
				<Title/>
				<About/>
			<Route/>
		<Router/>
	<Main/>
	<Footer/>

	