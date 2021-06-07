#/bin/bash
echo "##### Installing from NPM CDKTF-CLI #####"
npm install --global cdktf-cli@next
echo "##### Installing TERRAFORM CLI #######"
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://rpm.releases.hashicorp.com/AmazonLinux/hashicorp.repo
sudo yum -y install terraform
echo "##### Configuring terraform terminal auto-complete ######"
touch ~/.bashrc
terraform -install-autocomplete
echo "Hopefully we are done!!!"