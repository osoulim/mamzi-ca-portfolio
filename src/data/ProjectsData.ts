import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-boids", "Boids Simulation", "img/projects/boidsCover.png", `
    <div class="paragraph">
      <strong>Boids </strong> is a simulation of a flock of birds. It is based on the <a href="https://en.wikipedia.org/wiki/Boids" target="_blank">Boids algorithm</a> created by Craig Reynolds in 1986.
            </div>

          <div class="paragraph">
            Main features :
            <ul>
            <li>3D simulation</li>
            <li>Customizable settings</li>
            <li>Real-time rendering</li>
            <li>And more...</li>
            </ul>
        </div>
        
        <div class="paragraph">
          <div class="notice">
            Source code available on <a href="https://github.com/osoulim/BoidSimulation/tree/main" target="_blank">GitHub</a>.
            </div>
        </div>
        <div class="paragraph center">
          <img class="pc-screenshot" src="/img/projects/boids.gif" alt="Gif image of boids" />
        </div>
    `, "#c10606", false, false),
    new ProjectData("project-flag", "Flag Simulation", "img/projects/flagIcon.png", `
    <div class="paragraph">
                <strong>Flag simulation</strong> is a simulation of a flag in the wind.
                A mass spring system is used to simulate the flag's behavior.
                To simulate the wind, a random force based on sinusoïdal function is applied to the flag. 
                The wind simulation is based on the <a href="https://steven.codes/blog/cloth-simulation/" target="_blank">cloth simulation</a> created by Steven Traversi.
            </div>

            <div class="paragraph">
                Main features :
                <ul>
                <li>3D simulation</li>
                <li>Mass spring system</li>
                <li>Real-time rendering</li>
                <li>Wind simulation</li>
          </div>

            <div class="paragraph">
              <div class="notice">
                    The source code is available on <a href="https://github.com/osoulim/MassSpringSimulation/tree/master" target="_blank">GitHub</a>.
              </div>
            </div>

            <div class="paragraph center">
                <img class="pc-screenshot" src="/img/projects/Flag.gif" alt="Flag simulation Gif" />
            </div>`, "#1ca1e2"),
    new ProjectData("project-Jelly", "Jelly Cube Simulation", "img/projects/GellyIcon.png", `
    <div class="paragraph">
                <strong>The jelly cube simulation</strong> is a simulation of a cube made of jelly using the mass spring system.
                The cube is composed of 1000 particles and all the particles are connected by springs to their neighbors.
            </div>
            
            
          <div class="paragraph">
          Main features :
            <ul>
            <li>3D simulation</li>
            <li>Mass spring system</li>
            <li>Real-time rendering</li>
            </ul>
         </div>

            <div class="paragraph">
              <div class="notice">
                Source code available on <a href="https://github.com/osoulim/MassSpringSimulation/tree/master" target="_blank">GitHub</a>.
              </div>
            </div>

            <div class="paragraph center">
                <img class="pc-screenshot" src="/img/projects/JellyCube.gif" alt="Jelly Cube Simulation" />
            </div>`, "#f0ad4e"),
    new ProjectData("project-tableCloth", "Table Cloth Simulation", "img/projects/TableClothCover.jpg", `
    <div class="paragraph">
            <strong>Table cloth simulation</strong> is a simulation of a table cloth.
                The table cloth is composed of 1600 particles and all the particles are connected by springs to their neighbors.
            </div>

            <div class="paragraph">
                Main features :
                <ul>
                <li>3D simulation</li>
                <li>Mass spring system</li>
                <li>Real-time rendering</li>
                </ul>
            </div>

            <div class="paragraph">
              <div class="notice">
                Source code available on <a href="https://github.com/osoulim/MassSpringSimulation/tree/master" target="_blank">GitHub</a>.
                </div>
            </div>
            
            <div class="paragraph center">
                <img class="pc-screenshot" src="/img/projects/TableCloth.gif" alt="Table Cloth Simulation" />
                <img class="pc-screenshot" src="/img/projects/Cloth.gif" alt="Cloth Simulation" />
            </div>`, "#5cb85c"),
    new ProjectData("project-IK", "Inverse Kinematics", "img/projects/IKCover.jpg", `
    <div class="paragraph">
            <strong>Inverse Kinematics</strong> is a simulation of a robot arm using the inverse kinematics algorithm.
            The robot arm is composed of 3 segments and the end effector can be moved by the user.
            The inverse kinematics algorithm is used to calculate the angles of the joints of the robot arm.
            </div>

            <div class="paragraph">
                Main features :
                <ul>
                <li>3D simulation</li>
                <li>Inverse kinematics algorithm</li>
                <li>Rigged model over the robot arm</li>
                </ul>
            </div>

            <div class="paragraph">
              <div class="notice">
                Source code available on <a href="https://github.com/osoulim/InverseKinematic/tree/master" target="_blank">GitHub</a>.
                </div>
            </div>
            
            <div class="paragraph center">
                <img class="pc-screenshot" src="/img/projects/IK.gif" alt="Inverse Kinematics Simulation" />
            </div>`, "#007bff"),
];