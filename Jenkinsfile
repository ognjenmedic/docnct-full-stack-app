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

        stage('Build & Deploy with Docker Compose') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'myRDSSecret', usernameVariable: 'DB_USER', passwordVariable: 'DB_PASS')]) {
                    script {
                        sh """
                            export SPRING_DATASOURCE_USERNAME=$DB_USER
                            export SPRING_DATASOURCE_PASSWORD=$DB_PASS
                            docker-compose -f docker-compose.prod.yml build
                            docker-compose -f docker-compose.prod.yml up -d
                        """
                    }
                }
            }
        }
    }

    post {
        always {
            sh "docker-compose -f docker-compose.prod.yml down -v"
        }
    }
}
