pipeline {
    agent { docker { image 'node:6.3' } }
    stages {
        stage('build') {
            steps {
              sh 'echo "Jenkins test"'
                sh 'npm --version'
                sh 'npm install'
                sh 'npm run build'
                sh 'npm run start'
            }
        }
    }
}
