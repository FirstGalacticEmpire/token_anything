sudo find . -wholename '*backend_django/authentication/migrations/0*.py' -delete
sudo find . -wholename '*backend_django/nft/migrations/0*.py' -delete
sudo find . -wholename '*backend_django/request/migrations/0*.py' -delete
sudo find . -wholename '*backend_django/*.sqlite3' -delete
