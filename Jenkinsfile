pipeline {
    agent any

    stages {
        stage('Check AWS CLI') {
            steps {
                sh 'aws --version'
                sh 'aws s3 ls'
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
                script {
                    def dbUser = sh(script: "echo $RDS_SECRET | jq -r .username", returnStdout: true).trim()
                    def dbPass = sh(script: "echo $RDS_SECRET | jq -r .password", returnStdout: true).trim()

                    sh """
                        export SPRING_DATASOURCE_USERNAME=${dbUser}
                        export SPRING_DATASOURCE_PASSWORD=${dbPass}
                        docker-compose -f docker-compose-prod.yml build
                        docker-compose -f docker-compose-prod.yml up -d
                    """
                }
            }
        }
    }
    
    post {
        always {
            sh "docker-compose -f docker-compose-prod.yml down -v"
        }
    }
}
