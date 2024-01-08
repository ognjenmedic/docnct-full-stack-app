pipeline {
    agent any

    stages {
        stage('Check AWS CLI') {
            steps {
                sh 'aws --version'
            }
        }

        stage('Check jq') {
            steps {
                sh 'jq --version'
            }
        }

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Maven Build') {
            tools {
                maven 'M3'
            }
            steps {
                dir('backend/spring-boot-docnct') {
                    sh 'mvn clean package'
                }
            }
        }

        stage('Build & Deploy with Docker Compose') {
            steps {
                script {
                    // Diagnostic steps
                    sh "ls -al" // List everything in the current directory
                    sh "ls -al backend/spring-boot-docnct/target/" // List contents of target directory
                        
                    // No need for withEnv or withCredentials here
                    sh """
                        docker stop springboot-container || true
                        docker rm springboot-container || true
                        docker-compose -f docker-compose.prod.yml build
                        docker-compose -f docker-compose.prod.yml down
                        docker-compose -f docker-compose.prod.yml up -d
                    """
                }
            }
        }
    }
}



