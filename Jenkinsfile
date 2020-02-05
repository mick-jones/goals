pipeline {
    agent any
    stages {
        stage('build') {
            steps {
              sh 'echo "Jenkins test"'
              sh 'node --version'
              sh 'npm --version'
              sh 'npm install'
              sh 'npm run build'
              sh 'npm run start'
            }
        }
    }
}
