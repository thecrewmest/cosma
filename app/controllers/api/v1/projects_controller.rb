class Api::V1::ProjectsController < Api::V1::BaseController
  def index
    respond_with Project.all.order('created_at DESC')
  end

  def create
    respond_with :api, :v1, Project.create(proj_params)
  end

  def destroy
    respond_with Project.destroy(params[:id])
  end

  def update
    project = Project.find(params[:id])
    project.update_attributes(proj_params)
    respond_with project, json:project
  end

  private
    def proj_params
      params.require(:project).permit(:id, :title, :budget, :description)
    end
end