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
                withCredentials([usernamePassword(credentialsId: 'myRDSSecret', usernameVariable: 'DB_USER', passwordVariable: 'DB_PASS')]) {
                    script {
                        // Diagnostic steps
                        echo "DB_USER is: $DB_USER"
                        echo "DB_PASS is: ****"
                        
                        sh "ls -al" // List everything in the current directory
                        sh "ls -al backend/spring-boot-docnct/target/" // List contents of target directory
                        
                        withEnv(["SPRING_DATASOURCE_USERNAME=${DB_USER}", "SPRING_DATASOURCE_PASSWORD=${DB_PASS}"]) {
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
    }


}
