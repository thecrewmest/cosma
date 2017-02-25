class Api::V1::ProjectsController < Api::V1::BaseController
  def index
    respond_with Project.where(is_archived: false).order('created_at DESC')
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

  def archived
    respond_with Project.where(is_archived: true)
  end

  private
    def proj_params
      params.require(:project).permit(:id, :title, :budget, :description, :is_archived)
    end
end