install:
	docker-compose run --rm client npm install
start:
	docker-compose up -d
stop:
	docker-compose down
logs:
	docker-compose logs -f
ssh:
	docker-compose run --rm client sh
lint:
	docker-compose run --rm client npm run lint
test:
	docker-compose run --rm client npm test
