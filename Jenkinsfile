pipeline {
    agent any
    
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Build and Output') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: 'index.html,css/', allowEmptyArchive: true
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
    }
}
