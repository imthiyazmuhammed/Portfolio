import '../styles/timeline.scss';
function TimeLine() {
	return (
		<div className="py-3 bg-gray-900">
			<h5 className="text-white header z-10">Time Line</h5>

			<div class="container">
				<div class="timeline ">
					<div class="timeline-container warning">
						<div class="timeline-icon">
							<i class="far fa-grin-wink"></i>
						</div>
						<div class="timeline-body">
							<h4 class="timeline-title">
								<span class="badge">Future Forwards</span>
							</h4>
							<p>
								Software Developer with expertise in React and React-Native, building scalable applications with thousands of users and multiple user role management in the applications.
							</p>
							<p class="timeline-subtitle">2022 - Current...</p>
						</div>
					</div>
					<div class="timeline-container info">
						<div class="timeline-icon">
							<i class="far fa-grin-hearts"></i>
						</div>
						<div class="timeline-body">
							<h4 class="timeline-title">
								<span class="badge">BrainChip Solutions</span>
							</h4>
							<p>
								Junior Software Developer with hands on React and React-Native to build Feature Rich Mobile and Web applications
							</p>
							<p class="timeline-subtitle">2021 - 2022</p>
						</div>
					</div>
					<div class="timeline-container danger">
						<div class="timeline-icon">
							<i class="far fa-grin-hearts"></i>
						</div>
						<div class="timeline-body">
							<h4 class="timeline-title">
								<span class="badge">Bachelors</span>
							</h4>
							<p>
								Completed Bachelors in Computer Applications from Lal Bahadur
								Shastri College of applied Science under University of Calicut.
								that was a three year program and paved my root to developer
								field.
							</p>
							<p class="timeline-subtitle">2018 - 2021</p>
						</div>
					</div>
					<div class="timeline-container success">
						<div class="timeline-icon">
							<i class="far fa-grin-tears"></i>
						</div>
						<div class="timeline-body">
							<h4 class="timeline-title">
								<span class="badge">Higher Secondary</span>
							</h4>
							<p>
								Higher Secondary In Computer Science from Umbichy Hajee Higher
								Secondary School, Chaliyam, Kozhikode, Kerala, India
							</p>
							<p class="timeline-subtitle">2016 - 2018</p>
						</div>
					</div>
					{/* <div class="timeline-container warning">
						<div class="timeline-icon">
							<i class="far fa-grimace"></i>
						</div>
						<div class="timeline-body">
							<h4 class="timeline-title">
								<span class="badge">Warning</span>
							</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Aliquam necessitatibus numquam earum ipsa fugiat veniam
								suscipit, officiis repudiandae, eum recusandae neque
								dignissimos. Cum fugit laboriosam culpa, repellendus esse
								commodi deserunt.
							</p>
							<p class="timeline-subtitle">1 Day Ago</p>
						</div>
					</div> */}
					<div class="timeline-container">
						<div class="timeline-icon">
							<i class="far fa-grin-beam-sweat"></i>
						</div>
						<div class="timeline-body">
							<h4 class="timeline-title">
								<span class="badge">High School</span>
							</h4>
							<p>
								Pursued Secondary School Leaving Certificate in high school from
								Umbichy Hajee Higher Secondary School, Chaliyam, Kozhikode
							</p>
							<p class="timeline-subtitle">•••• 2016</p>
						</div>
					</div>
					{/* 	<div class="timeline-container info">
						<div class="timeline-icon">
							<i class="far fa-grin"></i>
						</div>
						<div class="timeline-body">
							<h4 class="timeline-title">
								<span class="badge">Info</span>
							</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Aliquam necessitatibus numquam earum ipsa fugiat veniam
								suscipit, officiis repudiandae, eum recusandae neque
								dignissimos. Cum fugit laboriosam culpa, repellendus esse
								commodi deserunt.
							</p>
							<p class="timeline-subtitle">4 Days Ago</p>
						</div>
					</div> */}
				</div>
			</div>

			{/* <div className="timeline">
				<div className="container left">
					<div className="content">
						<h2>infite</h2>
						<p>I never stops learning...</p>
					</div>
				</div>
				<div className="container right">
					<div className="content">
						<h2>Bachelors in Computer Applications</h2>
						<h5>2018-2021</h5>
						<p>Lal Bahadur Shastri College of applied Science, PGDI</p>
					</div>
				</div>
				<div className="container left">
					<div className="content">
						<h2>Computer Science</h2>
						<h5>2016-2018</h5>
						<p>UHHSS Chaliyam</p>
					</div>
				</div>
				<div className="container right">
					<div className="content">
						<h2>SSLC</h2>
						<h5>...2016</h5>
						<p>UHHSS Chaliyam</p>
					</div>
				</div>
			</div> */}
		</div>
	);
}

export default TimeLine;
